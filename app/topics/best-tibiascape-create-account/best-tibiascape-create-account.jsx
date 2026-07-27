import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-create-account');
}

export default function BestTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-create-account" />;
}
