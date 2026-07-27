import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-evo-servers');
}

export default function Demolidores13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-evo-servers" />;
}
