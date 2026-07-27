import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-forum');
}

export default function ActiveShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-forum" />;
}
