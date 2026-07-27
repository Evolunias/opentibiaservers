import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-server-list');
}

export default function Tibia13SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-server-list" />;
}
