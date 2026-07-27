import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-evo-servers');
}

export default function Noxiousot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-evo-servers" />;
}
