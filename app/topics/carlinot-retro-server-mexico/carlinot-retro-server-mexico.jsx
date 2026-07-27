import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-mexico');
}

export default function CarlinotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-mexico" />;
}
