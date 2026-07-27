import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-forum');
}

export default function HighrateRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-forum" />;
}
