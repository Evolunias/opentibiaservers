import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-create-account');
}

export default function TopClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-create-account" />;
}
