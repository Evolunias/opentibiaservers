import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-low-exp-server');
}

export default function Gunzodus14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-low-exp-server" />;
}
