import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-private-server');
}

export default function PopularAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-private-server" />;
}
