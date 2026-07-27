import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-server-list');
}

export default function Tibia12SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-server-list" />;
}
