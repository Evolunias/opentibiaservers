import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-evo-servers');
}

export default function Venoreot100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-evo-servers" />;
}
