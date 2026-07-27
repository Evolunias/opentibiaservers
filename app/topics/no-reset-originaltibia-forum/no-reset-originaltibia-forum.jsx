import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-forum');
}

export default function NoResetOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-forum" />;
}
