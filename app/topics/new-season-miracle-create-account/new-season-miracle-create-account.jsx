import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-create-account');
}

export default function NewSeasonMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-create-account" />;
}
