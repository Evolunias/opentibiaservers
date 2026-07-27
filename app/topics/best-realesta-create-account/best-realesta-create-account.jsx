import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-create-account');
}

export default function BestRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-create-account" />;
}
