import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-forum');
}

export default function HighrateRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-forum" />;
}
