import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-ot');
}

export default function PopularGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-ot" />;
}
