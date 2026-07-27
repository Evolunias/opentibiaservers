import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot');
}

export default function MarolaotKeywordPage() {
  return <StaticKeywordPage slug="marolaot" />;
}
