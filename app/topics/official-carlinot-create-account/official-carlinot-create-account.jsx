import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-create-account');
}

export default function OfficialCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-create-account" />;
}
