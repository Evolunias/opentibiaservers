import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-forum');
}

export default function PopularOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-forum" />;
}
