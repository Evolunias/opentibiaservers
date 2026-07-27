import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-create-account');
}

export default function CurrentRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-create-account" />;
}
