import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-ot-server');
}

export default function PopularTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-ot-server" />;
}
