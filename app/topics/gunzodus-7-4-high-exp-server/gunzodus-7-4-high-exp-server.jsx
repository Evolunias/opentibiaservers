import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-high-exp-server');
}

export default function Gunzodus74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-high-exp-server" />;
}
