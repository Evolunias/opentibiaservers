import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-forum');
}

export default function FreshStartCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-forum" />;
}
