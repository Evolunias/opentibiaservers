import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-download');
}

export default function LowrateGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-download" />;
}
