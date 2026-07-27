import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-season');
}

export default function Tibia11HighExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-season" />;
}
