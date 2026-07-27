import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-no-reset-server');
}

export default function Gunzodus71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-no-reset-server" />;
}
