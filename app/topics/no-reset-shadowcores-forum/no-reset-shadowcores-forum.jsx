import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-forum');
}

export default function NoResetShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-forum" />;
}
