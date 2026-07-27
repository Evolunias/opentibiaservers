import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-servers');
}

export default function Tibia772SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-servers" />;
}
