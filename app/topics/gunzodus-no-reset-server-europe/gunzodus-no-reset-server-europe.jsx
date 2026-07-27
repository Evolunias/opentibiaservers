import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-europe');
}

export default function GunzodusNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-europe" />;
}
