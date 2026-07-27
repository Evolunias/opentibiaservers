import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-ot');
}

export default function ActiveGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-ot" />;
}
