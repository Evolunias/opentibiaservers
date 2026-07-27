import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-season');
}

export default function Tibia14HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-season" />;
}
