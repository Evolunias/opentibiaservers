import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-download');
}

export default function CurrentGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-download" />;
}
