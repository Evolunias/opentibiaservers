import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-forum');
}

export default function TopCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-forum" />;
}
