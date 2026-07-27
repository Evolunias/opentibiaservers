import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-baiak-server');
}

export default function Tibiaretro80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-baiak-server" />;
}
