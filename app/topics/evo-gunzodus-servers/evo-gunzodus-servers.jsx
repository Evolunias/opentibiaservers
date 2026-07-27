import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-gunzodus-servers');
}

export default function EvoGunzodusServersKeywordPage() {
  return <StaticKeywordPage slug="evo-gunzodus-servers" />;
}
