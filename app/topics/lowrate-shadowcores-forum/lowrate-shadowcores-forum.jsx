import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-forum');
}

export default function LowrateShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-forum" />;
}
