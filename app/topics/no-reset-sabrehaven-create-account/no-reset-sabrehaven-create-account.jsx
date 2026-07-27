import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-create-account');
}

export default function NoResetSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-create-account" />;
}
