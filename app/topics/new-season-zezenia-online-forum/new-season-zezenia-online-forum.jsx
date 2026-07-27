import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-forum');
}

export default function NewSeasonZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-forum" />;
}
