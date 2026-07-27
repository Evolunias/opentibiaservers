import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-create-account');
}

export default function HighrateShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-create-account" />;
}
