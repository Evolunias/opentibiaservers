import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-create-account');
}

export default function FreshStartShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-create-account" />;
}
