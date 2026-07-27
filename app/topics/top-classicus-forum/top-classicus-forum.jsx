import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-forum');
}

export default function TopClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-forum" />;
}
