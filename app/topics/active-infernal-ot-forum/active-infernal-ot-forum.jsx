import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-forum');
}

export default function ActiveInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-forum" />;
}
