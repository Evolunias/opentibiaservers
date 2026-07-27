import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-north-america');
}

export default function CarlinotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-north-america" />;
}
