import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-season');
}

export default function Tibia84HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-season" />;
}
