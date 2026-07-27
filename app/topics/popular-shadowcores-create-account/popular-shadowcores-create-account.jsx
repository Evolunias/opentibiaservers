import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-create-account');
}

export default function PopularShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-create-account" />;
}
