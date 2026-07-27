import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-no-reset-server');
}

export default function Gunzodus14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-no-reset-server" />;
}
