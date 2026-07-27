import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-forum');
}

export default function CurrentMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-forum" />;
}
