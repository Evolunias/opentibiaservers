import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-no-reset-server');
}

export default function Gunzodus13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-no-reset-server" />;
}
