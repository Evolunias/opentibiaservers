import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-create-account');
}

export default function BestShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-create-account" />;
}
