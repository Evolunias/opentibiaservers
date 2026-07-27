import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-low-exp-server');
}

export default function Gunzodus12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-low-exp-server" />;
}
