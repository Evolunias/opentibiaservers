import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-create-account');
}

export default function NoResetAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-create-account" />;
}
