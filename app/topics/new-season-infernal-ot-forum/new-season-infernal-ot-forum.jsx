import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-forum');
}

export default function NewSeasonInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-forum" />;
}
