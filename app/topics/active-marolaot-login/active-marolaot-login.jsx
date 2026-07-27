import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-login');
}

export default function ActiveMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-login" />;
}
