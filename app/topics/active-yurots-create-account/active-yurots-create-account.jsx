import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-create-account');
}

export default function ActiveYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-create-account" />;
}
