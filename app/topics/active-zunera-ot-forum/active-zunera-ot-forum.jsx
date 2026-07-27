import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-forum');
}

export default function ActiveZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-forum" />;
}
