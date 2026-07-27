import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-create-account');
}

export default function NewThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-create-account" />;
}
