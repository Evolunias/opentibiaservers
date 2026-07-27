import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-download');
}

export default function CustomGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-download" />;
}
