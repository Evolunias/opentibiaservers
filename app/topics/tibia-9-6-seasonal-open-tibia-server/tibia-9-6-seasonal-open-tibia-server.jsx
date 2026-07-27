import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-open-tibia-server');
}

export default function Tibia96SeasonalOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-open-tibia-server" />;
}
