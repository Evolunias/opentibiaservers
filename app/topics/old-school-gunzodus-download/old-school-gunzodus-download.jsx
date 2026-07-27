import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-download');
}

export default function OldSchoolGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-download" />;
}
