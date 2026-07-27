import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-private-server');
}

export default function ActiveXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-private-server" />;
}
