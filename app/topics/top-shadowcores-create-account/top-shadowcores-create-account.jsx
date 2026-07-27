import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-create-account');
}

export default function TopShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-create-account" />;
}
