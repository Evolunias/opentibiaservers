import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus');
}

export default function OfficialGunzodusKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus" />;
}
