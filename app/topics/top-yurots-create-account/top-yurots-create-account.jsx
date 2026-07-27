import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-create-account');
}

export default function TopYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-create-account" />;
}
