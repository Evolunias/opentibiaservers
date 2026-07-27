import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-create-account');
}

export default function NewSeasonKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-create-account" />;
}
