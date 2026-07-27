import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-forum');
}

export default function CurrentTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-forum" />;
}
