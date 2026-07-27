import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-create-account');
}

export default function PopularTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-create-account" />;
}
