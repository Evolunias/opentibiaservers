import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-forum');
}

export default function HighrateMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-forum" />;
}
