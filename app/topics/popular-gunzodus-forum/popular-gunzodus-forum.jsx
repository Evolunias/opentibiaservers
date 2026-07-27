import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-forum');
}

export default function PopularGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-forum" />;
}
