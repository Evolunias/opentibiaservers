import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-no-reset-server');
}

export default function Gunzodus76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-no-reset-server" />;
}
