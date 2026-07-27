import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-ots');
}

export default function PopularGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-ots" />;
}
