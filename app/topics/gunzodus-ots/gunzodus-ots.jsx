import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-ots');
}

export default function GunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-ots" />;
}
