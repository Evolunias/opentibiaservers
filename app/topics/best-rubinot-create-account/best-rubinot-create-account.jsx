import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-create-account');
}

export default function BestRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-create-account" />;
}
