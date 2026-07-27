import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-private-server');
}

export default function OfficialCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-private-server" />;
}
