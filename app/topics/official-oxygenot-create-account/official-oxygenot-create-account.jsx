import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-create-account');
}

export default function OfficialOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-create-account" />;
}
