import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-low-exp-season');
}

export default function Tibia80LowExpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-low-exp-season" />;
}
