import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-forum');
}

export default function OldSchoolGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-forum" />;
}
