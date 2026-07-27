import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-forum');
}

export default function FreshStartBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-forum" />;
}
