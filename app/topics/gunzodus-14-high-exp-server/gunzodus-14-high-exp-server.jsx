import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-high-exp-server');
}

export default function Gunzodus14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-high-exp-server" />;
}
