import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-gunzodus-server');
}

export default function LowExpGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-gunzodus-server" />;
}
