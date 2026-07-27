import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-create-account');
}

export default function BestTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-create-account" />;
}
