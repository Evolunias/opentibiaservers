import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-forum');
}

export default function LowrateZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-forum" />;
}
