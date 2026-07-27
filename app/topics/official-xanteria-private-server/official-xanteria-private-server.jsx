import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-private-server');
}

export default function OfficialXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-private-server" />;
}
