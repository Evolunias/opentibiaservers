import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-forum');
}

export default function TopBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-forum" />;
}
