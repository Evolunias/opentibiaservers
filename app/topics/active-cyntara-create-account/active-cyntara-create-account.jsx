import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-create-account');
}

export default function ActiveCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-create-account" />;
}
