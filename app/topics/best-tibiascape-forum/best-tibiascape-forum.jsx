import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-forum');
}

export default function BestTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-forum" />;
}
