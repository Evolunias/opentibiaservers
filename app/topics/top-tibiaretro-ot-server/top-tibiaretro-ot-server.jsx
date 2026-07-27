import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-ot-server');
}

export default function TopTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-ot-server" />;
}
