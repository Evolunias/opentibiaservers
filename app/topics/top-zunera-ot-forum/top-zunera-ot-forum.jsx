import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-forum');
}

export default function TopZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-forum" />;
}
