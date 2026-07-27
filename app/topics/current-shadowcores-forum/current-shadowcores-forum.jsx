import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-forum');
}

export default function CurrentShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-forum" />;
}
