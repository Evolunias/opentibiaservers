import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-create-account');
}

export default function TopCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-create-account" />;
}
