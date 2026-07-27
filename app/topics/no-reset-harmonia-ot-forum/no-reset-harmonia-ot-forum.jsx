import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-forum');
}

export default function NoResetHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-forum" />;
}
