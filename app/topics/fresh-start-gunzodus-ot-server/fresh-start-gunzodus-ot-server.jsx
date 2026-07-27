import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-ot-server');
}

export default function FreshStartGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-ot-server" />;
}
