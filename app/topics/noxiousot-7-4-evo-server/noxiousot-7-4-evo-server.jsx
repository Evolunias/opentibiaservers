import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-evo-server');
}

export default function Noxiousot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-evo-server" />;
}
