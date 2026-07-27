import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-ots');
}

export default function ActiveGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-ots" />;
}
