import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-evo-guide');
}

export default function Tibia12EvoGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-evo-guide" />;
}
