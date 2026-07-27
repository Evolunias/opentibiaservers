import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-forum');
}

export default function OfficialGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-forum" />;
}
