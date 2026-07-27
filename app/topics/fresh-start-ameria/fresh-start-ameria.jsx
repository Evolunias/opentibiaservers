import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria');
}

export default function FreshStartAmeriaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria" />;
}
