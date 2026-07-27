import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-create-account');
}

export default function NewSeasonOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-create-account" />;
}
