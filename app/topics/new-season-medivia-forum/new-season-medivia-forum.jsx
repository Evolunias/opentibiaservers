import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-forum');
}

export default function NewSeasonMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-forum" />;
}
