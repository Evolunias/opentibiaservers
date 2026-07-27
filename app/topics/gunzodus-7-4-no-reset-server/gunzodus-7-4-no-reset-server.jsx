import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-no-reset-server');
}

export default function Gunzodus74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-no-reset-server" />;
}
