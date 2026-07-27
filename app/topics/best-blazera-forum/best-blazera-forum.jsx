import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-forum');
}

export default function BestBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-forum" />;
}
