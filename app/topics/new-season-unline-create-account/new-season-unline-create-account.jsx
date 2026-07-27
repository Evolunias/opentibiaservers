import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-create-account');
}

export default function NewSeasonUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-create-account" />;
}
