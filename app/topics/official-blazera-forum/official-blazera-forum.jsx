import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-forum');
}

export default function OfficialBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-forum" />;
}
