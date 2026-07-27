import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-forum');
}

export default function NewSeasonImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-forum" />;
}
