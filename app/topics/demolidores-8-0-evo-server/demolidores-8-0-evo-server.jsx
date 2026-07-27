import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-0-evo-server');
}

export default function Demolidores80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-0-evo-server" />;
}
