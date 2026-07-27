import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-forum');
}

export default function CurrentClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-forum" />;
}
