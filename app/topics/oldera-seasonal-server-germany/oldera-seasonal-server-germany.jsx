import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-germany');
}

export default function OlderaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-germany" />;
}
