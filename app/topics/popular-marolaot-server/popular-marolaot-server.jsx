import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-server');
}

export default function PopularMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-server" />;
}
