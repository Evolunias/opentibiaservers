import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-evo-server');
}

export default function Demolidores14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-evo-server" />;
}
