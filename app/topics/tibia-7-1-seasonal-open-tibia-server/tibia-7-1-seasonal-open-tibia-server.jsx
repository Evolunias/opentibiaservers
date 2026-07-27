import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-open-tibia-server');
}

export default function Tibia71SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-open-tibia-server" />;
}
