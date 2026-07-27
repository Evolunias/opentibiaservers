import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-private-server');
}

export default function PopularGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-private-server" />;
}
