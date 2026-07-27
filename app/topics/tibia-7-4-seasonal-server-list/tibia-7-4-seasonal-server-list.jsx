import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-server-list');
}

export default function Tibia74SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-server-list" />;
}
