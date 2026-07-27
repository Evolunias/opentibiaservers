import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-evo-server');
}

export default function Rubinot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-evo-server" />;
}
