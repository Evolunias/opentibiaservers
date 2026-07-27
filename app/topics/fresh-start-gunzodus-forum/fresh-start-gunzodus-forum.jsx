import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-forum');
}

export default function FreshStartGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-forum" />;
}
