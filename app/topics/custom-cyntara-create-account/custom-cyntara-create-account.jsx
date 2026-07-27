import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-create-account');
}

export default function CustomCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-create-account" />;
}
