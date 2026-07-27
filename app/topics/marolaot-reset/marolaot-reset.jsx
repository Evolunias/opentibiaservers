import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-reset');
}

export default function MarolaotResetKeywordPage() {
  return <StaticKeywordPage slug="marolaot-reset" />;
}
