import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-evo-server');
}

export default function Demolidores15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-evo-server" />;
}
