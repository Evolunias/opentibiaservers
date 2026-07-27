import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-poland');
}

export default function OlderaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-poland" />;
}
