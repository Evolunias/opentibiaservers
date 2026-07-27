import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-poland');
}

export default function GunzodusHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-poland" />;
}
