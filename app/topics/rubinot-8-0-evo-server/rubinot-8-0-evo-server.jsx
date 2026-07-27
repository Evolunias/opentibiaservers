import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-evo-server');
}

export default function Rubinot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-evo-server" />;
}
