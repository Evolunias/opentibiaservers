import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-evo-server');
}

export default function Demolidores11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-evo-server" />;
}
