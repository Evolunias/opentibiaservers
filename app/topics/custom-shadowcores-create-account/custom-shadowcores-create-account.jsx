import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-create-account');
}

export default function CustomShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-create-account" />;
}
