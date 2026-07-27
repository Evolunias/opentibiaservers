import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-forum');
}

export default function CurrentGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-forum" />;
}
