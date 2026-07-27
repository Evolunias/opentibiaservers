import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-forum');
}

export default function BestCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-forum" />;
}
