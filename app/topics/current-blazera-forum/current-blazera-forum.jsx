import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-forum');
}

export default function CurrentBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-forum" />;
}
