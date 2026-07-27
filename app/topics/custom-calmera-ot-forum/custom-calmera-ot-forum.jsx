import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-forum');
}

export default function CustomCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-forum" />;
}
