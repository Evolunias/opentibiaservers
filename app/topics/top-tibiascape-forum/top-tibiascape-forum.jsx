import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-forum');
}

export default function TopTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-forum" />;
}
