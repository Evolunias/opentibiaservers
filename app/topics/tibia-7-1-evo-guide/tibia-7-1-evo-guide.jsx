import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-guide');
}

export default function Tibia71EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-guide" />;
}
