import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-forum');
}

export default function BestZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-forum" />;
}
