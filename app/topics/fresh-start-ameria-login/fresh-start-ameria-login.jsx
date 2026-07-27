import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-login');
}

export default function FreshStartAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-login" />;
}
