import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-forum');
}

export default function HighrateBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-forum" />;
}
