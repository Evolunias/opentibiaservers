import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-ot-server');
}

export default function CustomGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-ot-server" />;
}
