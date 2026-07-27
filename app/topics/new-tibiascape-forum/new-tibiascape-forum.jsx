import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-forum');
}

export default function NewTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-forum" />;
}
