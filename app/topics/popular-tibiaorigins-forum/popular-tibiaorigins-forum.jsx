import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-forum');
}

export default function PopularTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-forum" />;
}
