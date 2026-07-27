import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-create-account');
}

export default function NewSeasonAmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-create-account" />;
}
