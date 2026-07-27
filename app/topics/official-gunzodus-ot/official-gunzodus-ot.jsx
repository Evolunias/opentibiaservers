import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-ot');
}

export default function OfficialGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-ot" />;
}
