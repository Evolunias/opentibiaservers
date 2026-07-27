import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-create-account');
}

export default function OfficialRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-create-account" />;
}
