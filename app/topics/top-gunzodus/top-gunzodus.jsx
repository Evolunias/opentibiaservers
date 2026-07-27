import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus');
}

export default function TopGunzodusKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus" />;
}
