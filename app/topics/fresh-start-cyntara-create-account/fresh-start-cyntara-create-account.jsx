import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-create-account');
}

export default function FreshStartCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-create-account" />;
}
