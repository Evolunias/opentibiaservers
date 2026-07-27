import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-website');
}

export default function FreshStartGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-website" />;
}
