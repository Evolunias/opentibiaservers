import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-login');
}

export default function BestMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-login" />;
}
