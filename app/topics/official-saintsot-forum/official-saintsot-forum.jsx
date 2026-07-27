import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-forum');
}

export default function OfficialSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-forum" />;
}
