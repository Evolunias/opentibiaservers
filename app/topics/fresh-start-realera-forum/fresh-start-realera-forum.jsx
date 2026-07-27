import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-forum');
}

export default function FreshStartRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-forum" />;
}
