import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-usa');
}

export default function ImperianicSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-usa" />;
}
