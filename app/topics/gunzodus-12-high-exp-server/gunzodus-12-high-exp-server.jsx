import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-high-exp-server');
}

export default function Gunzodus12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-high-exp-server" />;
}
