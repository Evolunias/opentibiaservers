import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-europe');
}

export default function OlderaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-europe" />;
}
