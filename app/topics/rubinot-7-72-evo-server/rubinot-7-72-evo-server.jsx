import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-evo-server');
}

export default function Rubinot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-evo-server" />;
}
