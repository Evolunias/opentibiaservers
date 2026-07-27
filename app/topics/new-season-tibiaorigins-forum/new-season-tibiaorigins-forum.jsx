import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-forum');
}

export default function NewSeasonTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-forum" />;
}
