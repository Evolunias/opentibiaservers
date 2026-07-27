import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-forum');
}

export default function NoResetNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-forum" />;
}
