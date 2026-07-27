import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-create-account');
}

export default function NewSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-create-account" />;
}
