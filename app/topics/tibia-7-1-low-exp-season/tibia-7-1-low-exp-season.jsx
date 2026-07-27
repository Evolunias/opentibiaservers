import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-season');
}

export default function Tibia71LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-season" />;
}
