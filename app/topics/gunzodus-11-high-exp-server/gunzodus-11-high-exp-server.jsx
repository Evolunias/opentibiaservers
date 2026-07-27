import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-high-exp-server');
}

export default function Gunzodus11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-high-exp-server" />;
}
