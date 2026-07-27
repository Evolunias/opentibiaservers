import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-create-account');
}

export default function HighrateCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-create-account" />;
}
