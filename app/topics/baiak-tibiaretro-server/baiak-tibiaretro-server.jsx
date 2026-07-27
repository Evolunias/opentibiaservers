import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiaretro-server');
}

export default function BaiakTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiaretro-server" />;
}
