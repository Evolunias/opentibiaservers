import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-europe');
}

export default function NepreniaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-europe" />;
}
