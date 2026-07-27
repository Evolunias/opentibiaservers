import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-create-account');
}

export default function NewCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-create-account" />;
}
