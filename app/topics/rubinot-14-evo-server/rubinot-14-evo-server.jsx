import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-evo-server');
}

export default function Rubinot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-evo-server" />;
}
