import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-bosses');
}

export default function GunzodusBossesKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-bosses" />;
}
