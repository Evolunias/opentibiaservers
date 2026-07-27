import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-season');
}

export default function Tibia81HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-season" />;
}
