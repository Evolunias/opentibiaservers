import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-guide');
}

export default function CustomGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-guide" />;
}
