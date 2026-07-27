import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-guide');
}

export default function Tibia13EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-guide" />;
}
