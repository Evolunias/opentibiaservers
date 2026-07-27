import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-forum');
}

export default function HighrateZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-forum" />;
}
