import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-eldera-server');
}

export default function EvoElderaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-eldera-server" />;
}
