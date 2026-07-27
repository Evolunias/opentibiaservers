import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-create-account');
}

export default function PopularMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-create-account" />;
}
