import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-server-list');
}

export default function Tibia86SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-server-list" />;
}
