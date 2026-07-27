import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-forum');
}

export default function LowrateGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-forum" />;
}
