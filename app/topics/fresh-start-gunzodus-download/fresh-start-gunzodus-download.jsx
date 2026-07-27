import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-download');
}

export default function FreshStartGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-download" />;
}
