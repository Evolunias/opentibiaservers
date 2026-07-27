import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-wars');
}

export default function GunzodusWarsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-wars" />;
}
