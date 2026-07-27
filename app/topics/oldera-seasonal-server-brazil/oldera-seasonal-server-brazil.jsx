import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-brazil');
}

export default function OlderaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-brazil" />;
}
