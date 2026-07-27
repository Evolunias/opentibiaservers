import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-high-exp-server');
}

export default function Gunzodus772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-high-exp-server" />;
}
