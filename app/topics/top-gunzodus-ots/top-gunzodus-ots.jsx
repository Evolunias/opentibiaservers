import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-ots');
}

export default function TopGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-ots" />;
}
