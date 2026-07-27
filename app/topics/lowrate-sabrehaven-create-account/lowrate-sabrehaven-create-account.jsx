import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-create-account');
}

export default function LowrateSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-create-account" />;
}
