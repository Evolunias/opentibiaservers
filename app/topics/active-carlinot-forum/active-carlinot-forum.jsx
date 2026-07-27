import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-forum');
}

export default function ActiveCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-forum" />;
}
