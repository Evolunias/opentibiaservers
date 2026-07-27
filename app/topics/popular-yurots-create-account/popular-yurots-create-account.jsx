import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-create-account');
}

export default function PopularYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-create-account" />;
}
