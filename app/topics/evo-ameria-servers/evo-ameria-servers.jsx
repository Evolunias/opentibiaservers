import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ameria-servers');
}

export default function EvoAmeriaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-ameria-servers" />;
}
