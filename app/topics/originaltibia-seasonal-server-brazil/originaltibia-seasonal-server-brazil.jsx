import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-brazil');
}

export default function OriginaltibiaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-brazil" />;
}
