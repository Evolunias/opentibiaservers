import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-create-account');
}

export default function PopularAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-create-account" />;
}
