import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-login');
}

export default function LowrateGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-login" />;
}
