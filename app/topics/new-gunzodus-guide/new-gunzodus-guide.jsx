import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-guide');
}

export default function NewGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-guide" />;
}
