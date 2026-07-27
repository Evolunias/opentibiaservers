import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-website');
}

export default function NewGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-website" />;
}
