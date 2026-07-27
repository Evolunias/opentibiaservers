import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-germany');
}

export default function NepreniaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-germany" />;
}
