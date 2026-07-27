import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-register');
}

export default function PopularGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-register" />;
}
