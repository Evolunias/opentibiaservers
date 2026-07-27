import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-evo-servers');
}

export default function Noxiousot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-evo-servers" />;
}
