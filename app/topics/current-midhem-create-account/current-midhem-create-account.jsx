import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-create-account');
}

export default function CurrentMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-create-account" />;
}
