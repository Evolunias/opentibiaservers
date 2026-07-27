import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-season');
}

export default function Tibia12LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-season" />;
}
