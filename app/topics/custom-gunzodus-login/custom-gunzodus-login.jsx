import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-login');
}

export default function CustomGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-login" />;
}
