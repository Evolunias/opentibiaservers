import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-download');
}

export default function RealMapGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-download" />;
}
