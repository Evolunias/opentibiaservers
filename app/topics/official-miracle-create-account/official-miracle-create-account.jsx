import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-create-account');
}

export default function OfficialMiracleCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-create-account" />;
}
