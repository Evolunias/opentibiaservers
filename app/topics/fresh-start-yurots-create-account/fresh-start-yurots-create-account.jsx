import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-create-account');
}

export default function FreshStartYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-create-account" />;
}
