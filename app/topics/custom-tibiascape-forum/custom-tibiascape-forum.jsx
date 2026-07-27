import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-forum');
}

export default function CustomTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-forum" />;
}
