import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-guide-canada');
}

export default function FreshStartGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-guide-canada" />;
}
