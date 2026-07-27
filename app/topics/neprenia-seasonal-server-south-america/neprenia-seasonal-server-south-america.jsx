import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-seasonal-server-south-america');
}

export default function NepreniaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-seasonal-server-south-america" />;
}
