import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-create-account');
}

export default function PopularTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-create-account" />;
}
