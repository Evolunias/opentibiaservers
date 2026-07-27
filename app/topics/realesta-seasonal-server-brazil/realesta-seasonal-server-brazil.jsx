import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-brazil');
}

export default function RealestaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-brazil" />;
}
