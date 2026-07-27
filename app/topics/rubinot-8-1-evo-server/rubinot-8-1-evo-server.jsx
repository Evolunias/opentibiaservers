import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-evo-server');
}

export default function Rubinot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-evo-server" />;
}
