import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-forum');
}

export default function ActiveMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-forum" />;
}
