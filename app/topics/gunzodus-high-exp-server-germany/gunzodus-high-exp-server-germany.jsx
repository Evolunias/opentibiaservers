import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-germany');
}

export default function GunzodusHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-germany" />;
}
