import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-baiak-server');
}

export default function Tibiaretro96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-baiak-server" />;
}
