import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-server-list');
}

export default function Tibia11SeasonalServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-server-list" />;
}
