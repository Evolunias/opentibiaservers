import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-forum');
}

export default function NewSeasonTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-forum" />;
}
