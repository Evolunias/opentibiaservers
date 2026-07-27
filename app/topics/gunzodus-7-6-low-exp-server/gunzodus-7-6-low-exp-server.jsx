import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-low-exp-server');
}

export default function Gunzodus76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-low-exp-server" />;
}
