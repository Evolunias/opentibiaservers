import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-server');
}

export default function FreshStartAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-server" />;
}
