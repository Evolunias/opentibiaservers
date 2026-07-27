import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-forum');
}

export default function CurrentCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-forum" />;
}
