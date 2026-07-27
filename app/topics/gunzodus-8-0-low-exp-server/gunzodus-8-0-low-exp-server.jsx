import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-low-exp-server');
}

export default function Gunzodus80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-low-exp-server" />;
}
