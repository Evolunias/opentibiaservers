import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-forum');
}

export default function ActiveTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-forum" />;
}
