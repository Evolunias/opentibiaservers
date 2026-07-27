import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-create-account');
}

export default function OfficialYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-create-account" />;
}
