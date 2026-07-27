import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-forum');
}

export default function FreshStartImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-forum" />;
}
