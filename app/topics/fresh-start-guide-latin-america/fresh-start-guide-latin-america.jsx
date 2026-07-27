import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-latin-america');
}

export default function FreshStartGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-latin-america" />;
}
