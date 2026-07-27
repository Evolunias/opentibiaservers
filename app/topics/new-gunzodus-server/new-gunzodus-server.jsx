import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-server');
}

export default function NewGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-server" />;
}
