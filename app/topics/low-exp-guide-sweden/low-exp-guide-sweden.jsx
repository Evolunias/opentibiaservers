import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-sweden');
}

export default function LowExpGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-sweden" />;
}
