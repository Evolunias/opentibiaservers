import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-brazil');
}

export default function FreshStartGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-brazil" />;
}
