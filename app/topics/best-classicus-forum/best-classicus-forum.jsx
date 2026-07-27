import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-forum');
}

export default function BestClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-forum" />;
}
