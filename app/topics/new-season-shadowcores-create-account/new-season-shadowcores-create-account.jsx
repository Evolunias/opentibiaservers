import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-create-account');
}

export default function NewSeasonShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-create-account" />;
}
