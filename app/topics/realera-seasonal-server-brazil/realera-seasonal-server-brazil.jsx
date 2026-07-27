import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-brazil');
}

export default function RealeraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-brazil" />;
}
