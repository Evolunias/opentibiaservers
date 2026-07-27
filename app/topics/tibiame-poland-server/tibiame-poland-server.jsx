import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-poland-server');
}

export default function TibiamePolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-poland-server" />;
}
