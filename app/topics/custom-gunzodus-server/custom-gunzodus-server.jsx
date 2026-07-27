import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-server');
}

export default function CustomGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-server" />;
}
