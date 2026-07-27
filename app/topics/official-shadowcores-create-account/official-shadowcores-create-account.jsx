import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-create-account');
}

export default function OfficialShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-create-account" />;
}
