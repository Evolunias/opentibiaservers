import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-forum');
}

export default function BestInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-forum" />;
}
