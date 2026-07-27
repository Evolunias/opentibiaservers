import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-sweden');
}

export default function FreshStartGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-sweden" />;
}
