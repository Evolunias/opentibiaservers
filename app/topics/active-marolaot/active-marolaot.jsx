import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot');
}

export default function ActiveMarolaotKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot" />;
}
