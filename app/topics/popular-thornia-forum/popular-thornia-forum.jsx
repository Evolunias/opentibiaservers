import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-forum');
}

export default function PopularThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-forum" />;
}
