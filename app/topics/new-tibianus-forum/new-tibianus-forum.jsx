import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-forum');
}

export default function NewTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-forum" />;
}
