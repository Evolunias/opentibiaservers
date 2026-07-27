import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-private-server');
}

export default function CustomGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-private-server" />;
}
