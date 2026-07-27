import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-create-account');
}

export default function NewSeasonTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-create-account" />;
}
