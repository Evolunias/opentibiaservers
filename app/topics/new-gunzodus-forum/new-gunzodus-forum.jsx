import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-forum');
}

export default function NewGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-forum" />;
}
