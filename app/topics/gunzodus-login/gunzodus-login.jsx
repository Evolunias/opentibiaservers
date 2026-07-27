import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-login');
}

export default function GunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-login" />;
}
