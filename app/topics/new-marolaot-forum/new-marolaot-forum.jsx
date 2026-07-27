import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-forum');
}

export default function NewMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-forum" />;
}
