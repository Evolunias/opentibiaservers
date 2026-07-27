import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-forum');
}

export default function TopCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-forum" />;
}
