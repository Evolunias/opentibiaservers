import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-oldera-servers');
}

export default function EvoOlderaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-oldera-servers" />;
}
