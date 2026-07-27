import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-website');
}

export default function PopularGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-website" />;
}
