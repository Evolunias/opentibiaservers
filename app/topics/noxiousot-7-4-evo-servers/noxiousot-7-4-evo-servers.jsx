import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-evo-servers');
}

export default function Noxiousot74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-evo-servers" />;
}
