import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-download');
}

export default function TopGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-download" />;
}
