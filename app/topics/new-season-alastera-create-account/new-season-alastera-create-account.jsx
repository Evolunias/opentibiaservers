import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-create-account');
}

export default function NewSeasonAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-create-account" />;
}
