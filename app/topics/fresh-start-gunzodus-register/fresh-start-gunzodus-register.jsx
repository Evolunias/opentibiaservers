import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-register');
}

export default function FreshStartGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-register" />;
}
