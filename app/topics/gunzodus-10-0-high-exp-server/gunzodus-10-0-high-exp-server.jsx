import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-high-exp-server');
}

export default function Gunzodus100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-high-exp-server" />;
}
