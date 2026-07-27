import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus');
}

export default function CurrentGunzodusKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus" />;
}
