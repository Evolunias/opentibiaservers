import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-guide');
}

export default function Tibia854EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-guide" />;
}
