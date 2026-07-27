import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-forum');
}

export default function NewShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-forum" />;
}
