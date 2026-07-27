import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-high-exp-server');
}

export default function Gunzodus13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-high-exp-server" />;
}
