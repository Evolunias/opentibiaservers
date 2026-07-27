import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-forum');
}

export default function FreshStartTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-forum" />;
}
