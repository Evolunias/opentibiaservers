import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-season');
}

export default function Tibia100HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-season" />;
}
