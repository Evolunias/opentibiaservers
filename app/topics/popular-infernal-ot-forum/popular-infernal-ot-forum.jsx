import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-forum');
}

export default function PopularInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-forum" />;
}
