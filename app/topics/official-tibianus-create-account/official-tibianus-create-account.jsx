import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-create-account');
}

export default function OfficialTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-create-account" />;
}
