import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-ot-server');
}

export default function TopGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-ot-server" />;
}
