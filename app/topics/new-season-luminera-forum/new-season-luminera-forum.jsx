import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-forum');
}

export default function NewSeasonLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-forum" />;
}
