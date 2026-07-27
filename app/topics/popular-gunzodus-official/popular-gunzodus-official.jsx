import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-official');
}

export default function PopularGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-official" />;
}
