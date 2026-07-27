import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-canada');
}

export default function NepreniaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-canada" />;
}
