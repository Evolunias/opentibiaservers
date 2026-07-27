import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-forum');
}

export default function FreshStartInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-forum" />;
}
