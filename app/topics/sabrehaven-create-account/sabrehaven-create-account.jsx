import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-create-account');
}

export default function SabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-create-account" />;
}
