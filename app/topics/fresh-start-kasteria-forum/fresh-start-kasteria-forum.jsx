import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-forum');
}

export default function FreshStartKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-forum" />;
}
