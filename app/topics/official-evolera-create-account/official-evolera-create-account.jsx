import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-create-account');
}

export default function OfficialEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-create-account" />;
}
