import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-ot');
}

export default function FreshStartAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-ot" />;
}
