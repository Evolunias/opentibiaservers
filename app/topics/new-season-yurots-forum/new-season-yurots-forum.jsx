import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-forum');
}

export default function NewSeasonYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-forum" />;
}
