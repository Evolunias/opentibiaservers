import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-season');
}

export default function Tibia76LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-season" />;
}
