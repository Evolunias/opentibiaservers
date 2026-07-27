import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-create-account');
}

export default function NewYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-create-account" />;
}
