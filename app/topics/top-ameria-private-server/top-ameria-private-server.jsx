import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-private-server');
}

export default function TopAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-private-server" />;
}
