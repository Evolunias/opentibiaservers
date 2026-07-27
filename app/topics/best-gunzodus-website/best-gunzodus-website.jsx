import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-website');
}

export default function BestGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-website" />;
}
