import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-download');
}

export default function GunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-download" />;
}
