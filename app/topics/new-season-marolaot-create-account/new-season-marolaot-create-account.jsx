import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-create-account');
}

export default function NewSeasonMarolaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-create-account" />;
}
