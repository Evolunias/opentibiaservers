import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-login');
}

export default function MarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="marolaot-login" />;
}
