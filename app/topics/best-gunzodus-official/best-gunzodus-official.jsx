import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-official');
}

export default function BestGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-official" />;
}
