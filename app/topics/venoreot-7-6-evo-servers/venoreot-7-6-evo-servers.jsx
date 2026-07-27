import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-evo-servers');
}

export default function Venoreot76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-evo-servers" />;
}
