import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-forum');
}

export default function LowrateCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-forum" />;
}
