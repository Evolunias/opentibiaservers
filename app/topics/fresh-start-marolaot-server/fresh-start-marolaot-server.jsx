import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-server');
}

export default function FreshStartMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-server" />;
}
