import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-create-account');
}

export default function OfficialUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-unline-create-account" />;
}
