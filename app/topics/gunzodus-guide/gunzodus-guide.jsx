import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-guide');
}

export default function GunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-guide" />;
}
