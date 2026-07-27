import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-forum');
}

export default function PopularTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-forum" />;
}
