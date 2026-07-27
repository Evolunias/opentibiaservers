import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-north-america');
}

export default function ImperianicSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-north-america" />;
}
