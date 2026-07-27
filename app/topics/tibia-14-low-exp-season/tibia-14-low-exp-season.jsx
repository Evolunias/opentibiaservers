import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-season');
}

export default function Tibia14LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-season" />;
}
