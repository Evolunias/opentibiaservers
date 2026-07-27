import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-create-account');
}

export default function BestMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-create-account" />;
}
