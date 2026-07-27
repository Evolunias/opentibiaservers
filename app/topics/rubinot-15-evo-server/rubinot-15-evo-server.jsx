import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-evo-server');
}

export default function Rubinot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-evo-server" />;
}
