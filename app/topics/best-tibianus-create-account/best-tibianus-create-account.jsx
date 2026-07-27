import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-create-account');
}

export default function BestTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-create-account" />;
}
