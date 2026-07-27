import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-low-exp-server');
}

export default function Gunzodus84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-low-exp-server" />;
}
