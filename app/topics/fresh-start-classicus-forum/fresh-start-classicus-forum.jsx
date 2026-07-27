import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-forum');
}

export default function FreshStartClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-forum" />;
}
