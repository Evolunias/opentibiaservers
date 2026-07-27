import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-ots');
}

export default function CurrentGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-ots" />;
}
