import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-forum');
}

export default function FreshStartRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-forum" />;
}
