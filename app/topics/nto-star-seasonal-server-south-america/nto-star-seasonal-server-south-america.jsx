import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-south-america');
}

export default function NtoStarSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-south-america" />;
}
