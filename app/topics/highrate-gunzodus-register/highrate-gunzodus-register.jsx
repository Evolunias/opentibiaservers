import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-register');
}

export default function HighrateGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-register" />;
}
