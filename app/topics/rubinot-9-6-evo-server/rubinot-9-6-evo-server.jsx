import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-evo-server');
}

export default function Rubinot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-evo-server" />;
}
