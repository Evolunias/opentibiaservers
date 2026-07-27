import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-create-account');
}

export default function ActiveShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-create-account" />;
}
