import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-baiak-server');
}

export default function Tibiaretro74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-baiak-server" />;
}
