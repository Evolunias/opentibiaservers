import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-guide');
}

export default function FreshStartGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-guide" />;
}
