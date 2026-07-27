import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-guide');
}

export default function Tibia74EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-guide" />;
}
