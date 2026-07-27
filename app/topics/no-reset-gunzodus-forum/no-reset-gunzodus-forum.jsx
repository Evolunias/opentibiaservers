import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-forum');
}

export default function NoResetGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-forum" />;
}
