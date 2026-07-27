import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-canada');
}

export default function EvoGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-canada" />;
}
