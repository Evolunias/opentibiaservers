import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-ot');
}

export default function CustomGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-ot" />;
}
