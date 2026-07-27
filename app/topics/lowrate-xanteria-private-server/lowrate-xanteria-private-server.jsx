import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-private-server');
}

export default function LowrateXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-private-server" />;
}
