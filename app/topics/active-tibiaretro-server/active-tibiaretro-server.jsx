import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-server');
}

export default function ActiveTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-server" />;
}
