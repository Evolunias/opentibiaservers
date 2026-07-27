import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-forum');
}

export default function HighrateInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-forum" />;
}
