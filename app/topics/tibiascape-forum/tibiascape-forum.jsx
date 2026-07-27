import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-forum');
}

export default function TibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-forum" />;
}
