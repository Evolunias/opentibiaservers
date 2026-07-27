import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-create-account');
}

export default function LowrateCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-create-account" />;
}
