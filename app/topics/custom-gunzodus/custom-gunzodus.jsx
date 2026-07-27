import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus');
}

export default function CustomGunzodusKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus" />;
}
