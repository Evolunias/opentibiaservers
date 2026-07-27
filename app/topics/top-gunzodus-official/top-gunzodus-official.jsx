import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-official');
}

export default function TopGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-official" />;
}
