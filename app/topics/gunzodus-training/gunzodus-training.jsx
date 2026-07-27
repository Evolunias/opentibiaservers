import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-training');
}

export default function GunzodusTrainingKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-training" />;
}
