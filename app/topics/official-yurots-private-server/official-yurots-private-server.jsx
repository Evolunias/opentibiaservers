import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-private-server');
}

export default function OfficialYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-private-server" />;
}
