import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-forum');
}

export default function OfficialZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-forum" />;
}
