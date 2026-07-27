import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-guide');
}

export default function Tibia81EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-guide" />;
}
