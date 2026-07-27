import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-poland');
}

export default function NepreniaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-poland" />;
}
