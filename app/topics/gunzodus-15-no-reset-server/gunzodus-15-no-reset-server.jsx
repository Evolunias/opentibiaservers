import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-no-reset-server');
}

export default function Gunzodus15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-no-reset-server" />;
}
