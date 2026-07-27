import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-evo-servers');
}

export default function Demolidores100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-evo-servers" />;
}
