import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-ot-server');
}

export default function CurrentGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-ot-server" />;
}
