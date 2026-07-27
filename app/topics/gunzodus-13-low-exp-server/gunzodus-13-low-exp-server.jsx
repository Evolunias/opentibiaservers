import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-low-exp-server');
}

export default function Gunzodus13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-low-exp-server" />;
}
