import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-brazil');
}

export default function GunzodusHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-brazil" />;
}
