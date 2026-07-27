import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-uk');
}

export default function OlderaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-uk" />;
}
