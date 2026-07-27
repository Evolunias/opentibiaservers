import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-forum');
}

export default function OfficialInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-forum" />;
}
