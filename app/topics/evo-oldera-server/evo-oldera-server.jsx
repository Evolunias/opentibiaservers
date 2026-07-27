import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-oldera-server');
}

export default function EvoOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-oldera-server" />;
}
