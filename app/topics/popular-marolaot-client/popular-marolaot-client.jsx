import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-client');
}

export default function PopularMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-client" />;
}
