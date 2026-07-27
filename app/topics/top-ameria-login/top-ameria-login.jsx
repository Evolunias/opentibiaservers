import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-login');
}

export default function TopAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-login" />;
}
