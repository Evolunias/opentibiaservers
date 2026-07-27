import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-evo-server');
}

export default function Demolidores100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-evo-server" />;
}
