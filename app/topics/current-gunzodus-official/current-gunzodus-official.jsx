import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-official');
}

export default function CurrentGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-official" />;
}
