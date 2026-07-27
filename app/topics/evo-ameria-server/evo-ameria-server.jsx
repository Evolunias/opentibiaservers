import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ameria-server');
}

export default function EvoAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-ameria-server" />;
}
