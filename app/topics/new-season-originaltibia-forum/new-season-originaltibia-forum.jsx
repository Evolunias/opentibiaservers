import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-forum');
}

export default function NewSeasonOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-forum" />;
}
