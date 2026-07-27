import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-create-account');
}

export default function FreshStartClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-create-account" />;
}
