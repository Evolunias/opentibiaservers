import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-create-account');
}

export default function CustomSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-create-account" />;
}
