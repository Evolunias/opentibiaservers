import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-forum');
}

export default function NoResetMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-forum" />;
}
