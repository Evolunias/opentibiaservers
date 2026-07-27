import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-create-account');
}

export default function CurrentClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-create-account" />;
}
