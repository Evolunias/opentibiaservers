import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-evo-server');
}

export default function Rubinot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-evo-server" />;
}
