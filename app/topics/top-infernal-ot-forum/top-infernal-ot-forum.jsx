import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-forum');
}

export default function TopInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-forum" />;
}
