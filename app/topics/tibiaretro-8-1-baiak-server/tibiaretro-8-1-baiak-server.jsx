import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-baiak-server');
}

export default function Tibiaretro81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-baiak-server" />;
}
