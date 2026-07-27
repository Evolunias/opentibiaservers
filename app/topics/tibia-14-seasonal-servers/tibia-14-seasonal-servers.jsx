import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-servers');
}

export default function Tibia14SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-servers" />;
}
