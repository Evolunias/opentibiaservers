import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-low-exp-server');
}

export default function Gunzodus74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-low-exp-server" />;
}
