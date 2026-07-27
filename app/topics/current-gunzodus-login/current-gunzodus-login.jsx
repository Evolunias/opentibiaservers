import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-login');
}

export default function CurrentGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-login" />;
}
