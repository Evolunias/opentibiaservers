import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-create-account');
}

export default function PopularClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-create-account" />;
}
