import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-create-account');
}

export default function NoResetShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-create-account" />;
}
