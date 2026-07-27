import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-guide');
}

export default function PopularGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-guide" />;
}
