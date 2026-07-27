import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-create-account');
}

export default function PopularCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-create-account" />;
}
