import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-login');
}

export default function PopularGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-login" />;
}
