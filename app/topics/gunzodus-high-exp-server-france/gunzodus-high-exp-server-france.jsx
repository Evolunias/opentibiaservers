import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-france');
}

export default function GunzodusHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-france" />;
}
