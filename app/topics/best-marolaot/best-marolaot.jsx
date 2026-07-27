import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot');
}

export default function BestMarolaotKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot" />;
}
