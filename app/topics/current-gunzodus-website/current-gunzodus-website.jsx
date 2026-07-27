import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-website');
}

export default function CurrentGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-website" />;
}
