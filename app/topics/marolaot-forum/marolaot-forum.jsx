import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-forum');
}

export default function MarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="marolaot-forum" />;
}
