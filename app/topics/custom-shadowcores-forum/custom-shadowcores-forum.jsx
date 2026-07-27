import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-forum');
}

export default function CustomShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-forum" />;
}
