import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-client');
}

export default function TopAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-client" />;
}
