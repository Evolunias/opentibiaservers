import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-forum');
}

export default function ActiveGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-forum" />;
}
