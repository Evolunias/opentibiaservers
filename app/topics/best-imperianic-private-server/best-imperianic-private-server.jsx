import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-private-server');
}

export default function BestImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-private-server" />;
}
