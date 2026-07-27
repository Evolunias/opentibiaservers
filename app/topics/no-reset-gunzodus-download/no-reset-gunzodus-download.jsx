import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-download');
}

export default function NoResetGunzodusDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-download" />;
}
