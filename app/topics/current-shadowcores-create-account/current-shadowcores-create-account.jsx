import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-create-account');
}

export default function CurrentShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-create-account" />;
}
