import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-forum');
}

export default function HighrateGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-forum" />;
}
