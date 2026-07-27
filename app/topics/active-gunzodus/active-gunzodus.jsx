import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus');
}

export default function ActiveGunzodusKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus" />;
}
