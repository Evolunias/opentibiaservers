import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-forum');
}

export default function OfficialEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-forum" />;
}
