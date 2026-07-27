import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-login');
}

export default function FreshStartMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-login" />;
}
