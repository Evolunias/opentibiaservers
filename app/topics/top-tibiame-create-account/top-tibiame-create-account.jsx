import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-create-account');
}

export default function TopTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-create-account" />;
}
