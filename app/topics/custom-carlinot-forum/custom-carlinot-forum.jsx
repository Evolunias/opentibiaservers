import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-forum');
}

export default function CustomCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-forum" />;
}
