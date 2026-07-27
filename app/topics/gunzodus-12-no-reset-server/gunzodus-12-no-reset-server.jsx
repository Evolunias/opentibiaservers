import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-no-reset-server');
}

export default function Gunzodus12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-no-reset-server" />;
}
