import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-evo-server');
}

export default function Demolidores12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-evo-server" />;
}
