import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-login');
}

export default function NewSeasonMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-login" />;
}
