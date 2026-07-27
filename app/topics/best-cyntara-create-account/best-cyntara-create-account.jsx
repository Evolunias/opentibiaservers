import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-create-account');
}

export default function BestCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-create-account" />;
}
