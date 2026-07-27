import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-forum');
}

export default function ShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-forum" />;
}
