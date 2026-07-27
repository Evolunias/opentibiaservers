import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-forum');
}

export default function NoResetInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-forum" />;
}
