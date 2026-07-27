import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-forum');
}

export default function FreshStartCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-forum" />;
}
