import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-argentina');
}

export default function GunzodusHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-argentina" />;
}
