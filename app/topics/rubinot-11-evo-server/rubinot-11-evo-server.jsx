import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-evo-server');
}

export default function Rubinot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-evo-server" />;
}
