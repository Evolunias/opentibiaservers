import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-forum');
}

export default function NewSeasonTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-forum" />;
}
