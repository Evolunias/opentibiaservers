import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-ot-server');
}

export default function ActiveTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-ot-server" />;
}
