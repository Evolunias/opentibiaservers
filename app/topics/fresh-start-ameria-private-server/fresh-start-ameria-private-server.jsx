import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-private-server');
}

export default function FreshStartAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-private-server" />;
}
