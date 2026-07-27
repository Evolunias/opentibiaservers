import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-download');
}

export default function NewSeasonGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-download" />;
}
