import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-gunzodus-server');
}

export default function HighExpGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-gunzodus-server" />;
}
