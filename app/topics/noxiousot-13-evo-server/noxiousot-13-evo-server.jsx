import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-evo-server');
}

export default function Noxiousot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-evo-server" />;
}
