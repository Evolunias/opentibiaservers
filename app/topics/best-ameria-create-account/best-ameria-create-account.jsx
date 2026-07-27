import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-create-account');
}

export default function BestAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-create-account" />;
}
