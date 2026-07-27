import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-create-account');
}

export default function CurrentSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-create-account" />;
}
