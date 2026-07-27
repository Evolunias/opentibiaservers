import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-forum');
}

export default function OfficialShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-forum" />;
}
