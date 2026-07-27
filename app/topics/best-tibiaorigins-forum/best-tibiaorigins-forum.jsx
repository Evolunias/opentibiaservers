import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-forum');
}

export default function BestTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-forum" />;
}
