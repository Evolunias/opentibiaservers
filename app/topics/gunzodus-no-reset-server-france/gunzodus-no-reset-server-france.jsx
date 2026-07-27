import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-france');
}

export default function GunzodusNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-france" />;
}
