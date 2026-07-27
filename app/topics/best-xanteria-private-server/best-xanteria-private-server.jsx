import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-private-server');
}

export default function BestXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-private-server" />;
}
