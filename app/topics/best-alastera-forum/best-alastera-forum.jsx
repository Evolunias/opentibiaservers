import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-forum');
}

export default function BestAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-forum" />;
}
