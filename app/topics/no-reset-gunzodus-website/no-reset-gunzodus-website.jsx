import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-website');
}

export default function NoResetGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-website" />;
}
