import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-download');
}

export default function BestGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-download" />;
}
