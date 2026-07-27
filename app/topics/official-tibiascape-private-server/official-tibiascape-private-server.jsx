import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-private-server');
}

export default function OfficialTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-private-server" />;
}
