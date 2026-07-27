import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-no-reset-server');
}

export default function Gunzodus100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-no-reset-server" />;
}
