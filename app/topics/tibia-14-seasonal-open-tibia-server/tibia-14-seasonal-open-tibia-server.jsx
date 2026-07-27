import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-open-tibia-server');
}

export default function Tibia14SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-open-tibia-server" />;
}
