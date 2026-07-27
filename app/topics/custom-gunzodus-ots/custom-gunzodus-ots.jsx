import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-ots');
}

export default function CustomGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-ots" />;
}
