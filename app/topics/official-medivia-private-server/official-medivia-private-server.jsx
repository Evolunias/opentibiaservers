import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-private-server');
}

export default function OfficialMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-private-server" />;
}
