import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-forum');
}

export default function TopThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-forum" />;
}
