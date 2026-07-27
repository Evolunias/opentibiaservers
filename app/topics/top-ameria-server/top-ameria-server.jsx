import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-server');
}

export default function TopAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-server" />;
}
