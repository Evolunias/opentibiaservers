import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-ots');
}

export default function OfficialGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-ots" />;
}
