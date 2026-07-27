import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-baiak-server');
}

export default function Tibiaretro14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-baiak-server" />;
}
