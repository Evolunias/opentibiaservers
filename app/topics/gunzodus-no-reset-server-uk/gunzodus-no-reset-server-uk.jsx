import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-uk');
}

export default function GunzodusNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-uk" />;
}
