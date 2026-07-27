import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-create-account');
}

export default function TopRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-create-account" />;
}
