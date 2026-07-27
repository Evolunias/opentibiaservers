import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-france');
}

export default function FreshStartForumFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-france" />;
}
