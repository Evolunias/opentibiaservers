import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-official');
}

export default function GunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-official" />;
}
