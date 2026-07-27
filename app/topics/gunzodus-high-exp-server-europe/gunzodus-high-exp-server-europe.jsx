import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-europe');
}

export default function GunzodusHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-europe" />;
}
