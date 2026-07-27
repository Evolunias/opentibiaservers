import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-create-account');
}

export default function LowrateShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-create-account" />;
}
