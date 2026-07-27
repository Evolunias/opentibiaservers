import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-forum');
}

export default function NewSeasonEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-forum" />;
}
