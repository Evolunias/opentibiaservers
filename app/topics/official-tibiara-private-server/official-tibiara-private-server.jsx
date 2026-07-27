import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-private-server');
}

export default function OfficialTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-private-server" />;
}
