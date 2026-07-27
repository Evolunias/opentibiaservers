import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-forum');
}

export default function OfficialCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-forum" />;
}
