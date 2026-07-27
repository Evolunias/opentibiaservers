import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-mexico');
}

export default function ImperianicSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-mexico" />;
}
