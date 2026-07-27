import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-no-reset-server');
}

export default function Gunzodus80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-no-reset-server" />;
}
