import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-evo-server');
}

export default function Rubinot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-evo-server" />;
}
