import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-north-america');
}

export default function NepreniaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-north-america" />;
}
