import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot');
}

export default function TopMarolaotKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot" />;
}
