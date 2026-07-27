import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-brazil');
}

export default function KasteriaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-brazil" />;
}
