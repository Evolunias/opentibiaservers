import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-create-account');
}

export default function NewSeasonMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-create-account" />;
}
