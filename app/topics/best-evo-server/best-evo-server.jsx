import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evo-server');
}

export default function BestEvoServerKeywordPage() {
  return <StaticKeywordPage slug="best-evo-server" />;
}
