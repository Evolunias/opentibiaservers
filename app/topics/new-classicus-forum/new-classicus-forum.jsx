import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-forum');
}

export default function NewClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-forum" />;
}
