import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-create-account');
}

export default function RealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="realesta-create-account" />;
}
