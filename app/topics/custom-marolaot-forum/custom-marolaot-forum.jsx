import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-forum');
}

export default function CustomMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-forum" />;
}
