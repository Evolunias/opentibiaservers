import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-server');
}

export default function Tibia14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-server" />;
}
