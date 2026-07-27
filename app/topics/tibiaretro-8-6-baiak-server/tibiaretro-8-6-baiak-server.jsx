import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-baiak-server');
}

export default function Tibiaretro86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-baiak-server" />;
}
