import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-website');
}

export default function OldSchoolGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-website" />;
}
