import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-forum');
}

export default function NoResetMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-forum" />;
}
