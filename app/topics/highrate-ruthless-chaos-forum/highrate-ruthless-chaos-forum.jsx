import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-forum');
}

export default function HighrateRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-forum" />;
}
