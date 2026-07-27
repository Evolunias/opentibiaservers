import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-forum');
}

export default function HighrateCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-forum" />;
}
