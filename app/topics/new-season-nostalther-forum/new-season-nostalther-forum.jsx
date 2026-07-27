import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-forum');
}

export default function NewSeasonNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-forum" />;
}
