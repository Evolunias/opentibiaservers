import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-forum');
}

export default function BestCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-forum" />;
}
