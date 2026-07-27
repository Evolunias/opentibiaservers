import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-servers');
}

export default function Tibia74SeasonalServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-servers" />;
}
