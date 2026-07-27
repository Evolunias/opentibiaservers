import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-forum');
}

export default function OfficialNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-forum" />;
}
