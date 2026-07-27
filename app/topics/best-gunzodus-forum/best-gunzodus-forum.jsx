import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-forum');
}

export default function BestGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-forum" />;
}
