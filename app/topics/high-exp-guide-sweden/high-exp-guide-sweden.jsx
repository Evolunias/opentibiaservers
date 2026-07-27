import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-sweden');
}

export default function HighExpGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-sweden" />;
}
