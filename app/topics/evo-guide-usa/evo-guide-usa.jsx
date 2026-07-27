import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-usa');
}

export default function EvoGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-usa" />;
}
