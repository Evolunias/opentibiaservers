import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-private-server');
}

export default function PopularRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-private-server" />;
}
