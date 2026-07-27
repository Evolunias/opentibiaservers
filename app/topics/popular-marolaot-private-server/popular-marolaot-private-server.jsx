import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-private-server');
}

export default function PopularMarolaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-private-server" />;
}
