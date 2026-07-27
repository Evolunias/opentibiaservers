import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-private-server');
}

export default function FreshStartGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-private-server" />;
}
