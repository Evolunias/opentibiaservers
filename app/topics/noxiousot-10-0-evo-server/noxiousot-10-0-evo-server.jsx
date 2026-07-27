import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-evo-server');
}

export default function Noxiousot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-evo-server" />;
}
