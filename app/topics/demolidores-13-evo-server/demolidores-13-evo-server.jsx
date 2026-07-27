import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-evo-server');
}

export default function Demolidores13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-evo-server" />;
}
