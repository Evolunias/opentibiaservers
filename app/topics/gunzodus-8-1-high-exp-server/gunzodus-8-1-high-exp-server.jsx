import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-high-exp-server');
}

export default function Gunzodus81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-high-exp-server" />;
}
