import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-website');
}

export default function NewSeasonGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-website" />;
}
