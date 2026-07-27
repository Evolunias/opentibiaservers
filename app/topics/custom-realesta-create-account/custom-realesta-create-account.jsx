import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-create-account');
}

export default function CustomRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-create-account" />;
}
