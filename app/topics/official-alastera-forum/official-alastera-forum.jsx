import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-forum');
}

export default function OfficialAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-forum" />;
}
