import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-guide');
}

export default function Tibia15EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-guide" />;
}
