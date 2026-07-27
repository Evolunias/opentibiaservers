import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-baiak-server');
}

export default function Tibiaretro772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-baiak-server" />;
}
