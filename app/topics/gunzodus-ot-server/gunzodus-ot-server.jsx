import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-ot-server');
}

export default function GunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-ot-server" />;
}
