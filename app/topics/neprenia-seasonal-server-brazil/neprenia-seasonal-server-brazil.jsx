import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-brazil');
}

export default function NepreniaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-brazil" />;
}
