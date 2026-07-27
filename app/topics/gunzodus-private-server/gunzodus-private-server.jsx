import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-private-server');
}

export default function GunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-private-server" />;
}
