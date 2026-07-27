import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-seasonal-server-south-america');
}

export default function ArcaniarlSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-seasonal-server-south-america" />;
}
