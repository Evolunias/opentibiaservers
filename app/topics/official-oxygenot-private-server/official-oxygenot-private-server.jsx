import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-private-server');
}

export default function OfficialOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-private-server" />;
}
