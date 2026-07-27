import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot');
}

export default function FreshStartMarolaotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot" />;
}
