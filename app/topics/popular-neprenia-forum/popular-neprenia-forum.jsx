import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-forum');
}

export default function PopularNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-forum" />;
}
