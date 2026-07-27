import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-evo-servers');
}

export default function Noxiousot81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-evo-servers" />;
}
