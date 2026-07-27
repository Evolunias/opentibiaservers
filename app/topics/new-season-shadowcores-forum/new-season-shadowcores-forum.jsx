import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-forum');
}

export default function NewSeasonShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-forum" />;
}
