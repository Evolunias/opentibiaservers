import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-latin-america');
}

export default function ImperianicSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-latin-america" />;
}
