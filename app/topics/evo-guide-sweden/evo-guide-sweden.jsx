import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-sweden');
}

export default function EvoGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-sweden" />;
}
