import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-gunzodus-server');
}

export default function RetroGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="retro-gunzodus-server" />;
}
