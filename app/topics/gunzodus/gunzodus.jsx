import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus');
}

export default function GunzodusKeywordPage() {
  return <StaticKeywordPage slug="gunzodus" />;
}
