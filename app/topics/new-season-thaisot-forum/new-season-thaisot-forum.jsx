import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-forum');
}

export default function NewSeasonThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-forum" />;
}
