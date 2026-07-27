import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-forum');
}

export default function HighrateKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-forum" />;
}
