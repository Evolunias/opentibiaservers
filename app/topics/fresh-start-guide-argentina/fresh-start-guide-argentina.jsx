import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-argentina');
}

export default function FreshStartGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-argentina" />;
}
