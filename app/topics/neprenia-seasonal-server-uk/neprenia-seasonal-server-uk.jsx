import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-uk');
}

export default function NepreniaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-uk" />;
}
