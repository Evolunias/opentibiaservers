import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-eldera-servers');
}

export default function EvoElderaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-eldera-servers" />;
}
