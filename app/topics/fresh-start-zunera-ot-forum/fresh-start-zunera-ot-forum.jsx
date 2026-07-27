import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-forum');
}

export default function FreshStartZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-forum" />;
}
