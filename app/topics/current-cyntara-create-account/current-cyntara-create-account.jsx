import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-create-account');
}

export default function CurrentCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-create-account" />;
}
