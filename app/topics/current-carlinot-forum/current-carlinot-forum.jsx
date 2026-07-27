import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-forum');
}

export default function CurrentCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-forum" />;
}
