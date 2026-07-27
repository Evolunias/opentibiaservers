import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-season');
}

export default function Tibia74HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-season" />;
}
