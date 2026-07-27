import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-forum');
}

export default function OfficialMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-forum" />;
}
