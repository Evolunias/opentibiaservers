import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot');
}

export default function CurrentMarolaotKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot" />;
}
