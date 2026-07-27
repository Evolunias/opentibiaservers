import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-private-server');
}

export default function NewGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-private-server" />;
}
