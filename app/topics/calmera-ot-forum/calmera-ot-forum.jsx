import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-forum');
}

export default function CalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-forum" />;
}
