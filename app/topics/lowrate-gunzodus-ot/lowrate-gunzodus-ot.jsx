import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-ot');
}

export default function LowrateGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-ot" />;
}
