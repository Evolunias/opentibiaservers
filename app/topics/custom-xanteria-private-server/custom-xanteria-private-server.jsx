import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-private-server');
}

export default function CustomXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-private-server" />;
}
