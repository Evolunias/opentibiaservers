import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-guide');
}

export default function Tibia76EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-guide" />;
}
