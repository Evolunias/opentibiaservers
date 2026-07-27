import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-create-account');
}

export default function TopMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-create-account" />;
}
