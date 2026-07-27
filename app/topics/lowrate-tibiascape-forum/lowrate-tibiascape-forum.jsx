import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-forum');
}

export default function LowrateTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-forum" />;
}
