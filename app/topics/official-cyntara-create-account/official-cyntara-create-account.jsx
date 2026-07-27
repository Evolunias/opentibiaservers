import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-create-account');
}

export default function OfficialCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-create-account" />;
}
