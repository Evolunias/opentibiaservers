import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-forum');
}

export default function NewSeasonUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-forum" />;
}
