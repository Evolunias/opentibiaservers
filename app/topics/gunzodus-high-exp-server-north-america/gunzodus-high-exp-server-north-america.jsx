import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-north-america');
}

export default function GunzodusHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-north-america" />;
}
