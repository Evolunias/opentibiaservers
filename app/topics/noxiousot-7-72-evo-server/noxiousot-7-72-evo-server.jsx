import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-72-evo-server');
}

export default function Noxiousot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-72-evo-server" />;
}
