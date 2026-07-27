import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-season');
}

export default function Tibia11LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-season" />;
}
