import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-low-exp-server');
}

export default function Gunzodus86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-low-exp-server" />;
}
