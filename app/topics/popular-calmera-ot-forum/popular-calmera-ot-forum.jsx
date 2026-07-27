import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-forum');
}

export default function PopularCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-forum" />;
}
