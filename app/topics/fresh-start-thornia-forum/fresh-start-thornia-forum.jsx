import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-forum');
}

export default function FreshStartThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-forum" />;
}
