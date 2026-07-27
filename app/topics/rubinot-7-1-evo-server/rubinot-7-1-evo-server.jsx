import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-evo-server');
}

export default function Rubinot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-evo-server" />;
}
