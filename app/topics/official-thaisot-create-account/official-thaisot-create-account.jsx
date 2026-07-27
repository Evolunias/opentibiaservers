import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-create-account');
}

export default function OfficialThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-create-account" />;
}
