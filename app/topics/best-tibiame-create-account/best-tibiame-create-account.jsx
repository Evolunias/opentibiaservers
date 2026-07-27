import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-create-account');
}

export default function BestTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-create-account" />;
}
