import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-ot-server');
}

export default function HighrateGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-ot-server" />;
}
