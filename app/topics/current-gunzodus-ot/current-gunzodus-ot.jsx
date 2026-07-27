import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-ot');
}

export default function CurrentGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-ot" />;
}
