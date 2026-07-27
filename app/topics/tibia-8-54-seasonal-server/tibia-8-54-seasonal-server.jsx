import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-server');
}

export default function Tibia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-server" />;
}
