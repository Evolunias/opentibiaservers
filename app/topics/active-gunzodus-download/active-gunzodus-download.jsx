import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-download');
}

export default function ActiveGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-download" />;
}
