import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-forum');
}

export default function FreshStartShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-forum" />;
}
