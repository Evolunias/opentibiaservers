import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-forum');
}

export default function RealMapGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-forum" />;
}
