import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-season');
}

export default function Tibia96LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-season" />;
}
