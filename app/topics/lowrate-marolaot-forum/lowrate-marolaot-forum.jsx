import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-forum');
}

export default function LowrateMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-forum" />;
}
