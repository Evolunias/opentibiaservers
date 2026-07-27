import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-official');
}

export default function LowrateGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-official" />;
}
