import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-latin-america');
}

export default function CarlinotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-latin-america" />;
}
