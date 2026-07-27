import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-forum');
}

export default function LowrateInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-forum" />;
}
