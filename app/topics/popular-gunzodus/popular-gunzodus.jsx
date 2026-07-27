import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus');
}

export default function PopularGunzodusKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus" />;
}
