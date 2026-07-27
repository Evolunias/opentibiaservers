import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-login');
}

export default function TopMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-login" />;
}
