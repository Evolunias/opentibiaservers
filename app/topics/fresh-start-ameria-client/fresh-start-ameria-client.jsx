import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-client');
}

export default function FreshStartAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-client" />;
}
