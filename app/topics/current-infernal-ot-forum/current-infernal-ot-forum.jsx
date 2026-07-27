import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-forum');
}

export default function CurrentInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-forum" />;
}
