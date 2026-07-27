import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-create-account');
}

export default function ActiveOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-create-account" />;
}
