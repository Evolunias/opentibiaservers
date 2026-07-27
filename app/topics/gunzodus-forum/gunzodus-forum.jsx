import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-forum');
}

export default function GunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-forum" />;
}
