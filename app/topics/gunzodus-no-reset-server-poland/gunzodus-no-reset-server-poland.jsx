import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-poland');
}

export default function GunzodusNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-poland" />;
}
