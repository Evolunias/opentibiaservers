import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-high-exp-server');
}

export default function Gunzodus76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-high-exp-server" />;
}
