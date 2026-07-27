import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-forum');
}

export default function CustomGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-forum" />;
}
