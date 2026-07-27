import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-create-account');
}

export default function NewSeasonCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-create-account" />;
}
