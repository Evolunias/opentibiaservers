import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-ots');
}

export default function FreshStartAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-ots" />;
}
