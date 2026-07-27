import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-official');
}

export default function CustomGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-official" />;
}
