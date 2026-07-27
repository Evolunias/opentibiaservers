import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-forum');
}

export default function NewCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-forum" />;
}
