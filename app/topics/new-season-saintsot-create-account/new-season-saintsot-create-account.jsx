import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-create-account');
}

export default function NewSeasonSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-create-account" />;
}
