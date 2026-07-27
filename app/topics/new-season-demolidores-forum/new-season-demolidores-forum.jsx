import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-forum');
}

export default function NewSeasonDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-forum" />;
}
