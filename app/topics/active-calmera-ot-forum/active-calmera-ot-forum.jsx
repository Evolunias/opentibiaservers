import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-forum');
}

export default function ActiveCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-forum" />;
}
