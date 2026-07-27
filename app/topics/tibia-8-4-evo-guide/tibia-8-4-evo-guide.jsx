import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-guide');
}

export default function Tibia84EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-guide" />;
}
