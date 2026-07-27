import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-high-exp-server');
}

export default function Gunzodus86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-high-exp-server" />;
}
