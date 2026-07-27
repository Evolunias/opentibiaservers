import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-evo-servers');
}

export default function Venoreot14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-evo-servers" />;
}
