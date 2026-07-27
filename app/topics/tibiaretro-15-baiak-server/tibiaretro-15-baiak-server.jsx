import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-baiak-server');
}

export default function Tibiaretro15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-baiak-server" />;
}
