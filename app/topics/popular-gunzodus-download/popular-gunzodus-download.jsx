import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-download');
}

export default function PopularGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-download" />;
}
