import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-evo-servers');
}

export default function Demolidores14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-evo-servers" />;
}
