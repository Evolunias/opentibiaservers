import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-low-exp-server');
}

export default function Gunzodus71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-low-exp-server" />;
}
