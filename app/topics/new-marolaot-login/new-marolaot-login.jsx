import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-login');
}

export default function NewMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-login" />;
}
