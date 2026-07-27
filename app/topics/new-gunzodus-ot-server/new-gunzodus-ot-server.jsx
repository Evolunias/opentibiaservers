import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-ot-server');
}

export default function NewGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-ot-server" />;
}
