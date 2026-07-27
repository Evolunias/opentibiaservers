import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-evo-server');
}

export default function Noxiousot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-evo-server" />;
}
