import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-season');
}

export default function Tibia12HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-season" />;
}
