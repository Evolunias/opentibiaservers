import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-download');
}

export default function OfficialGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-download" />;
}
