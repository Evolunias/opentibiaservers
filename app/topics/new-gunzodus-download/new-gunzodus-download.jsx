import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-download');
}

export default function NewGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-download" />;
}
