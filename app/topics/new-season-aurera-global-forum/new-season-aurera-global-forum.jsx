import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-forum');
}

export default function NewSeasonAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-forum" />;
}
