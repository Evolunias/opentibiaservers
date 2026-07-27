import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-server-list');
}

export default function Tibia76SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-server-list" />;
}
