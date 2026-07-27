import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-brazil');
}

export default function ImperianicSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-brazil" />;
}
