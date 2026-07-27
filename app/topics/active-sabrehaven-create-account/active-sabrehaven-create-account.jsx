import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-create-account');
}

export default function ActiveSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-create-account" />;
}
