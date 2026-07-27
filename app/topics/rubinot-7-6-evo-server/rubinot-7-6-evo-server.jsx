import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-evo-server');
}

export default function Rubinot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-evo-server" />;
}
