import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-create-account');
}

export default function NewSeasonEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-create-account" />;
}
