import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-forum');
}

export default function TopGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-forum" />;
}
