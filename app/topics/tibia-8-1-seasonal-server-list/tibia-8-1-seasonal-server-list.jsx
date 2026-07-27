import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-server-list');
}

export default function Tibia81SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-server-list" />;
}
