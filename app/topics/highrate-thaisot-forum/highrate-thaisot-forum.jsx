import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-forum');
}

export default function HighrateThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-forum" />;
}
