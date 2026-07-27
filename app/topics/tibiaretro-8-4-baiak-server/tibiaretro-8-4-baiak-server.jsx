import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-baiak-server');
}

export default function Tibiaretro84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-baiak-server" />;
}
